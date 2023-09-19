import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { OutlinedButton } from '@shared/ui/outlinedBtn';
import { PageLoader } from '@shared/ui/pageLoader';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, ScrollView, Alert, RefreshControl } from 'react-native';
import { getPost, resetPost, updatePostStatus } from 'src/store/slices/postSlice';

import { Guests } from './components/Guests';
import { Header } from './components/Header';
import { Requests } from './components/Requests';
import { Tags } from './components/Tags';
import { createStyles } from './postFullHost.styles';

export default function PostFullHost() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { post, isPostLoading } = useAppSelector((state) => state.postSlice);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const actionBtns = [
    {
      title: 'Confirm & Lock',
      color: theme.colors.postStatus.confirmed,
      onPress: confirmPost,
    },
    {
      title: 'Change',
      color: theme.colors.postStatus.created,
      onPress: changePost,
    },
    {
      title: 'Cancel',
      color: theme.colors.postStatus.canceled,
      onPress: cancelPost,
    },
  ];

  useEffect(() => {
    return () => {
      dispatch(resetPost());
    };
  }, [dispatch]);

  function refetchPost() {
    if (!post || !post.info) return;
    dispatch(resetPost());
    dispatch(getPost({ id: post.info.id as string }));
  }

  function handleBack() {
    navigation.goBack();
  }

  function confirmPost() {
    if (!post || !post.info) return;
    dispatch(
      updatePostStatus({
        id: post?.info.id,
        postStatus: 'Confirmed',
      })
    );
  }
  function changePost() {
    Alert.alert('change');
  }
  function cancelPost() {
    if (!post || !post.info) return;
    dispatch(
      updatePostStatus({
        id: post?.info.id,
        postStatus: 'Cancelled',
      })
    );
  }

  if (isPostLoading || !(post && post.info)) return <PageLoader />;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollWrapper}
      style={styles.wrapper}
      bounces={true}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={isPostLoading} onRefresh={refetchPost} />}
    >
      <Header postInfo={post.info} />
      <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />

      <View style={styles.postInfo}>
        <Tags tags={post.info.tags} />
        <Guests postInfo={post.info} />

        {post.info.postStatus === 'Created' && (
          <>
            <View style={styles.actionButtons}>
              {actionBtns.map((button) => (
                <OutlinedButton key={button.title} {...button} {...styles.actionBtn} />
              ))}
            </View>
            <Requests postId={post.info.id} />
          </>
        )}
      </View>
    </ScrollView>
  );
}

// import { auth } from '../firebase';
import styled from 'styled-components';
import PostTweetForm from '../components/post-tweet-form';

const Wrapper = styled.div``;

export default function Home() {
  // const logOut = () => {
  //   auth.signOut();
  // };

  return (
    // <h1>
    //   <button onClick={logOut}>Log Out</button>
    // </h1>
    <Wrapper>
      <PostTweetForm />
    </Wrapper>
  );
}

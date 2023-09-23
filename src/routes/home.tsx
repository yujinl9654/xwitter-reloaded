// import { auth } from '../firebase';
import styled from 'styled-components';
import PostTweetForm from '../components/post-tweet-form';
import Timeline from '../components/timeline';

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
`;

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
      <Timeline />
    </Wrapper>
  );
}

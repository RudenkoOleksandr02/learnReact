import React from 'react';
import Post from './Post/Post.jsx';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validate";
import {FormControl} from "../../common/FormControls/FormControl";

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field tag="textarea" component={FormControl} name={"newPost"} validate={[required, maxLength10]} placeholder={'Post message'}/>
            <button>ADD</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: 'myPost'})(MyPostForm)

const MyPosts = React.memo((props) => {
    console.log('rerender');
    const onAddPost = (formData) => {
        props.addPost(formData.newPost);
    }

    return <div>
        My posts
        <MyPostReduxForm onSubmit={onAddPost}/>
        <div>
            {props.posts.map(post => <Post key={post.id} message={post.message}
                                           likesCount={post.likesCount}/>)}
        </div>
    </div>

});

export default MyPosts;
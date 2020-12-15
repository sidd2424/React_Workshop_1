import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import withLogin from './withLogin'

function Create(props) {
  const history = useHistory();

  const [type, setType] = useState("text");
  const [content, setContent] = useState("");
 
  let data = props.cardsarray;
  console.log(data)

  let checkLogin=()=>{
    if(props.login===false){
      history.push('./login')
    }
  }

  const UserId = 1;
  const UserName = "katarina toren";
  const UserImage = "https://randomuser.me/api/portraits/thumb/women/20.jpg";

  const handleSelectEvent = ({ target }) => {
    setType(target.value);
  };

  let onFormSubmit = (e) => {
    e.preventDefault();

    let newCard = {
      id: data.length + 1,
      type: type,
      content: content,
      user: {
        id: UserId,
        name: UserName,
        image: UserImage,
      },
    };

    //data.push(newCard);
    data.unshift(newCard);
    console.log("onsubmit"+data);
  };

  let handleContentEvent = ({ target }) => {
    setContent(target.value);
  };

  return (
    <div>
      {checkLogin}
      <h2>Create Card</h2>
      <form>
        <select name="type" onChange={handleSelectEvent} value={type}>
          <option value="text">Text</option>
          <option value="image">Image</option>
        </select>
        <br />
        <br />
        <div>
          {type === "text" ? (
            <textarea
              rows={10}
              cols={50}
             onChange={handleContentEvent}
              value={content}
            ></textarea>
          ) : (
            <div>
              <label>Image Url</label>
              <input
                type="text"
                onChange={handleContentEvent}
                value={content}
              />
            </div>
          )}
        </div>

        <button onClick={onFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default withLogin(Create);         






import React from "react";
import styles from "./AddForm.module.scss";
import { Card, Button } from "../index";

const AddForm = () => {
  const [showForm, setShowForm] = React.useState(false);
  const textareaRef = React.useRef(null)

  React.useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.focus()
      } 
  }, [showForm])

  return (
    <>
      {showForm ? (
        <div className={styles.add_form}>
          <div className={styles.input}>
            <Card>
              <textarea placeholder="Введите название карточки" ref={textareaRef} rows="3"></textarea>
            </Card>
          </div>
          <div className={styles.bottom}>
            <Button>Добавить карточку</Button>
            <img onClick={setShowForm.bind(this, false)} width="16px" height="16px" src="./close.png" alt="close" />
          </div>
        </div>
      ) : (
        <div onClick={setShowForm.bind(this, true)} className={styles.add_bottom}>
          <img  width="20px" height="20px" src="./plus.png" alt="plus" />
          <span>Добавить ещё одну карточку</span>
        </div>
      )}
    </>
  );
};

export default AddForm;

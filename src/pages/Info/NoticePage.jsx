import styles from './Info.module.css';

function NoticePage() {
  return (
    <div className={`${styles.wrapper}`}>
      <h5>Register as a Member</h5>
      <p>Click the icon at the top labeled 'Register' →  Enter: name/email/password to successfully create an account."</p>
    </div>
  );
}

export default NoticePage;
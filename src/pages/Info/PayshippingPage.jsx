import styles from './Info.module.css';

function PayshippingPage() {
  return (
    <div className={`${styles.wrapper}`}>
      <h5>Taiwan</h5>
      <p>Currently, only bank transfer payment is available. Convenience store pickup at 7-Eleven/FamilyMart with no payment on delivery. Shipping fee is $60."</p>
    </div>
  );
}

export default PayshippingPage;
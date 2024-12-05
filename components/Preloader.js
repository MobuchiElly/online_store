import styles from "../styles/Preloader.module.css" 

const Preloader = () => {
  return (
    <div>
        <div className={styles.preloader}>
            <div className={styles.loader}>
                <span className={styles.dot}></span>
                <div className={styles.dots}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Preloader; 
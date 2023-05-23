import styles from '@/styles/Home.module.css'
export default function SearchInput() {
    return (
            <div className={`${styles.search_area}`}>
                <span className="iconfont" style={{ marginLeft: 8, fontSize: 20 }}>&#xe82e;</span>
                <input
                    type='text'
                    placeholder='Search....'
                    className={`${styles.input}`}
                    style={{ flex: 1, padding: 1, marginLeft: 10, border: "none", outline: "none", backgroundColor: 'transparent' }}
                />
            </div>
    )
}
import style from '@/styles/contactComponent.module.css'
export default function Contactus(props) {
    return (<div className={style.contact_total} style={{ display: "flex", flex: 1, backgroundColor: 'black', borderRadius: 12, alignItems: 'center',...props.topStyle }}>
        <div style={{ flex: 1, padding: '5%', alignItems: 'center' }} className={style.contactus_border}>
            <div className={style.contact_img} style={{}}>
                <img src="/訂製服務.png" width={'100%'} />
            </div>
            <div className={style.max_screen} style={{ flex: 1, flexDirection: 'column', padding: 16, alignItems: 'flex-start' }}>
                <div style={{ color: 'white', fontSize: 16, letterSpacing: 2, width: '100%', textAlign: 'left' }}>接收最新信息和優惠</div>
                <input style={{
                    marginTop: 24,
                    outline: 'none',
                    width: '100%',
                    paddingTop: 16,
                    paddingBottom: 16,
                    fontSize: 12,
                    borderRadius: 8,
                    paddingLeft: 8
                }}
                    placeholder="請輸入您的電郵地址"
                />
                <div style={{ width: '100%' }}>
                    <input type={'button'} value={'發送'}
                        style={{ paddingLeft: 24, paddingRight: 24, letterSpacing: 2, paddingTop: 8, paddingBottom: 8, borderRadius: 8, marginTop: 24, fontSize: 16 }}
                    ></input>
                </div>

            </div>
        </div>

        <div className={style.contact_min_border} style={{width:'100%'}}>
            <div style={{ flex: 1, padding: '5%', alignItems: 'center' }} className={style.contactus_min_border}>
                <div className={style.contact_img} style={{}}>
                    <img src="/訂製服務.png" width={'100%'} />
                </div>
            </div>

            <div className={style.max_screen} style={{ flex: 1, flexDirection: 'column', padding: 16, alignItems: 'flex-start' }}>
                <div style={{ color: 'white', fontSize: 16, letterSpacing: 2, width: '100%', textAlign: 'left' }}>接收最新信息和優惠</div>
                <input style={{
                    marginTop: 24,
                    outline: 'none',
                    width: '100%',
                    paddingTop: 16,
                    paddingBottom: 16,
                    fontSize: 12,
                    borderRadius: 8,
                    paddingLeft: 8
                }}
                    placeholder="請輸入您的電郵地址"
                />
                <div style={{ width: '100%' }}>
                    <input type={'button'} value={'發送'}
                        style={{ paddingLeft: 24, paddingRight: 24, letterSpacing: 2, paddingTop: 8, paddingBottom: 8, borderRadius: 8, marginTop: 24, fontSize: 16 }}
                    ></input>
                </div>

            </div>
        </div>

    </div>)
}
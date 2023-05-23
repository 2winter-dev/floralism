import style from '@/styles/shopcarbtn.module.css'
import { useEffect } from 'react';
import styles from '@/styles/product.module.css'

export default function ShopCarPage() {

    useEffect(() => {

    }, [])

    return (


        <div className={style.total_page}>
            <div onClick={() => {
                props.setIsShow(false);
            }} className={
                // props.isShow ? 
                `${style.close_btn_show} ${style.close_btn}`
                // : style.close_btn
            }>
                <span className='iconfont'>&#xe641;</span>
            </div>
            <div className={style.shopcar_main}>
                <div style={{ display: 'flex', paddingLeft: 10, paddingRight: 10 }}>
                    <div style={{ width: '15%' }}><input type='checkbox' style={{ width: 15, height: 15 }} /><span>全選</span></div>
                    <div style={{ width: '45%' }}><span>貨物</span></div>
                    <div style={{ width: '10%' }}><span>數量</span></div>
                    <div style={{ width: '10%' }}><span>價格</span></div>
                    <div style={{ width: '10%' }}><span>優惠價</span></div>
                    <div style={{ width: '10%' }}><span>金額</span></div>
                </div>
                <div style={{ flex: 1, overflow: 'auto', marginTop: 20 }}>
                    {
                        <div style={{ padding: 10, marginBottom: 10 }} className={style.goodsItem}>
                            <div>【FLORALISM】玫瑰/繆斯女神，卡羅拉紅玫瑰....</div>
                            <div style={{ marginTop: 10, display: 'flex' }}>
                                <div style={{ width: '15%' }}>
                                    <img src='/homepage/圖2.png' style={{ width: '90%', borderRadius: 8 }} />
                                </div>
                                {
                                    <div style={{ flex: 1, flexDirection: 'column' }}>
                                        <div style={{ width: '100%' }}>
                                            繆斯女神，卡羅拉紅玫瑰+紅豆+粉色桔梗+銀葉菊
                                        </div>
                                        <div style={{ width: '100%', marginTop: 24, display: 'flex', alignItems: 'center' }}>
                                            <div style={{ width: '53%' }}>
                                                <div style={{ width: '97%', display: 'flex', alignItems: 'flex-start' }}>
                                                    <input type='checkbox' style={{ width: 15, height: 15, marginRight: 12 }} />
                                                    <img src='/心意卡.png' style={{ width: '15%', marginRight: 12 }} />
                                                    <select style={{ flex: 1, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, backgroundColor: 'rgb(224,224,224)' }}>
                                                        <option>玫瑰16支</option>
                                                        <option>禮盒包裝</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                                    <button className={style.decrease}>-</button>
                                                    <input type="text" className={style.number} value={1} />
                                                    <button className={style.increase}>+</button>
                                                </div>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div>HK$ 799.00</div>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div>無</div>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ color: 'red' }}>hk$ 799.00</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer', marginRight: '6%', alignItems: 'flex-end', marginTop: 28 }}>
                                            刪除
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    {
                        <div style={{ padding: 10, marginBottom: 10 }} className={style.goodsItem}>
                            <div>【FLORALISM】玫瑰/繆斯女神，卡羅拉紅玫瑰....</div>
                            <div style={{ marginTop: 10, display: 'flex' }}>
                                <div style={{ width: '15%' }}>
                                    <img src='/homepage/圖2.png' style={{ width: '90%', borderRadius: 8 }} />
                                </div>
                                {
                                    <div style={{ flex: 1, flexDirection: 'column' }}>
                                        <div style={{ width: '100%' }}>
                                            繆斯女神，卡羅拉紅玫瑰+紅豆+粉色桔梗+銀葉菊
                                        </div>
                                        <div style={{ width: '100%', marginTop: 24, display: 'flex', alignItems: 'center' }}>
                                            <div style={{ width: '53%' }}>
                                                <div style={{ width: '97%', display: 'flex', alignItems: 'flex-start' }}>
                                                    <input type='checkbox' style={{ width: 15, height: 15, marginRight: 12 }} />
                                                    <img src='/心意卡.png' style={{ width: '15%', marginRight: 12 }} />
                                                    <select style={{ flex: 1, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, backgroundColor: 'rgb(224,224,224)' }}>
                                                        <option>玫瑰16支</option>
                                                        <option>禮盒包裝</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                                    <button className={style.decrease}>-</button>
                                                    <input type="text" className={style.number} value={1} />
                                                    <button className={style.increase}>+</button>
                                                </div>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div>HK$ 799.00</div>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div>無</div>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ color: 'red' }}>hk$ 799.00</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer', marginRight: '6%', alignItems: 'flex-end', marginTop: 28 }}>
                                            刪除
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
                <div style={{ display: 'flex', marginTop: 24, alignItems: 'center' }}>
                    <div style={{ flex: 1, alignItems: 'center' }}><input type='checkbox' style={{ width: 15, height: 15 }} /><span>全選</span></div>
                    <div style={{ flex: 1, alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}>刪除</div>
                    <div style={{ flex: 1, alignItems: 'center', textAlign: 'center' }}>數量總件數1件</div>
                    <div style={{ flex: 1, alignItems: 'center', textAlign: 'center' }}>合計<span>hk$799.00</span></div>
                    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <button style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgba(213,59,68)', border: 'none', color: 'white', letterSpacing: 2, cursor: 'pointer' }} >購買</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


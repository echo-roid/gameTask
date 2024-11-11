import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"

export default function Time({ setFlag }) {
    return (
        <div className={styles.toggle} onClick={() => { setFlag(false) }}>
            <div className='flex items-center w-[220px] justify-between  '>
                <div className=''>
                    <Image
                        className={""}
                        src="/circle.png"
                        alt="Next.js"
                        width={50}
                        height={50}
                        
                    />
                </div>
                <div className='relative'>
                    <Image
                        className={""}
                        src="/timer.png"
                        alt="Next.js"
                        width={120}
                        height={60}
                    />

                    <Image
                        className={styles.timer}
                        src="/num.png"
                        alt="Next.js"
                        width={120}
                        height={60}

                    />

                    <Image
                        className={styles.plusicon}
                        src="/PlusCircle.png"
                        alt="Next.js"
                        width={120}
                        height={60}

                    />
                </div>
            </div>
        </div>

    )
}

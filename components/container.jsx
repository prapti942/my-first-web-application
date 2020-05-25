import React from "react"
import styles from "./container.module.css"
const Container = () => {
    return (
        <div className={styles.container}>
            <img className={styles.imgContainer} src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-9/p720x720/96534540_242947916764933_4146714289186537472_o.jpg?_nc_cat=107&_nc_sid=e3f864&_nc_eui2=AeFQb2-55fqiTo6Dl6IfEeLjXemLujxJRyNd6Yu6PElHI8D6x9n2ZhogQ6hTCRiCbnepjB5Hi4XRkxD39Apulp2R&_nc_ohc=mivGbxTrW7oAX8bc1Xv&_nc_ht=scontent.fcgp3-1.fna&_nc_tp=6&oh=ea7c7c898001a2e6e9a4ab20b1b277b6&oe=5EF156B1" alt="my image"/>
            <h2>Prapti Rudra</h2>
            <h3>Student</h3>
        </div>
    )
}

export default Container
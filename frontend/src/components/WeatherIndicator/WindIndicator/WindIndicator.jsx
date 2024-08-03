import wind_arrow from "../../../assets/wind_arrow.svg";
import styles from "./WindIndicator.module.scss"
import classNames from "classnames";

const WindIndicator = ({angel,windSpeed}) => {
  return <>
    <div className={classNames(styles.wind,'flex flex-col bg-black/[.50] rounded-full backdrop-blur-[20px] px-[43px] py-[18px] my-2')}>
      <span className={classNames(styles.windName,'wind__name text-sm text-white/[.5]')}>Wind</span>
      <span className={'text-5xl'}>{windSpeed}</span>
      <span className={'text-base'}>Km/h</span>
    </div>
    <img
        style={{rotate: `${angel}deg`}}
        className={styles.windArrow} src={wind_arrow} alt={''}
    />
  </>
}

export default WindIndicator;
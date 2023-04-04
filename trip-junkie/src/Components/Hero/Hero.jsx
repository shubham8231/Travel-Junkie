import heroStyles from "./Hero.module.scss"

function Hero() {
  return (
    <div className={heroStyles.heroSection}>
      <div className={heroStyles.herocontent}>
        <div className={heroStyles.hi}>Escape and Breathe the Air of New Places</div>
        <div className={heroStyles.ques}>
          <h2>Where do you want to go?</h2>
        </div>
        <input type="text" className={heroStyles.searchbar} placeholder="Find your destination"></input>
      </div>
    </div>
  )
}

export default Hero
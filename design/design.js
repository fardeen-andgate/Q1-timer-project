import chalkAnimation from "chalk-animation";
const sleeep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let timerTitle = chalkAnimation.rainbow("Start Your Timer");
    await sleeep();
    timerTitle.stop();
}
export default welcome;

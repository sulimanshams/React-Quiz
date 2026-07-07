export default function FinishScreen({ points, maxPoints }) {
    const percentage = (points/maxPoints) * 100;
    let emoji;
    if(percentage === 100) emoji = "🥳";
    if(percentage < 100 && percentage >= 80) emoji = "😎";
    if(percentage < 80 && percentage >= 60) emoji = "🙂";
    if(percentage < 60 && percentage >= 40) emoji = "😐";
    if(percentage < 40 && percentage >= 20) emoji = "😕";
    if(percentage < 20) emoji = "😞";
    return (
        <p className="result ">
          <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(percentage)}%)
        </p>
    )
}
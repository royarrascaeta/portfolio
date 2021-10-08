export default function typeWriter(text, target, reverse){
  let arr = text.split("");
  let i = reverse ? arr.length : 0;

  const interval = setInterval(() => {
    if(reverse){
      if(i == -1){
        clearInterval(interval);
        setTimeout(() => {
          typeWriter(text, target);
        }, 1000);
      }else{
        target.innerHTML = text.slice(0, i);
        i--;
      }
    }else{
      if(i >= arr.length){
        clearInterval(interval);
        setTimeout(() => {
          typeWriter(text, target, true);
        }, 5000);
      }else{
        target.innerHTML += arr[i] === " " ? " " : arr[i]
        i++;
      }
    }

  }, 80);
}
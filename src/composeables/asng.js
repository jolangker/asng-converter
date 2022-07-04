const useASNG = () => {
  const reverseString = (str) => {
    const splitString = str.split("");

    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");

    return joinArray;
  };

  const toASNG = (txt) => {
    const reversed = reverseString(txt);
    const strArr = reversed.split("");

    const idx = strArr.findIndex((str) => {
      return (
        str.includes("a") ||
        str.includes("i") ||
        str.includes("u") ||
        str.includes("e") ||
        str.includes("o")
      );
    });

    strArr[idx] = strArr[idx] + "gnsa";

    return reverseString(strArr.join(""));
  };

  const toASNGSentence = (sentence) => {
    const arr = sentence.split(" ");

    const asngArr = arr.map((a) => {
      return toASNG(a);
    });

    return asngArr.join(" ");
  };

  const toNormal = (asng) => asng.replaceAll("asng", "");

  return {
    toASNGSentence,
    toNormal,
  };
};

export default useASNG;

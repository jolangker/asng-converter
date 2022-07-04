const useASNG = () => {
  const reverseString = (str) => {
    const splitString = str.split("");

    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");

    return joinArray;
  };

  const toASNG = (txt) => {
    const reversed = reverseString(txt.toUpperCase());
    const strArr = reversed.split("");

    const idx = strArr.findIndex((str) => {
      return (
        str.includes("A") ||
        str.includes("I") ||
        str.includes("U") ||
        str.includes("E") ||
        str.includes("O")
      );
    });

    strArr[idx] = strArr[idx] + "GNSA";

    return reverseString(strArr.join(""));
  };

  const toASNGSentence = (sentence) => {
    const arr = sentence.split(" ");

    const asngArr = arr.map((a) => {
      return toASNG(a);
    });

    return asngArr.join(" ");
  };

  const toNormal = (asng) => asng.toLowerCase().replaceAll("asng", "").toUpperCase();

  return {
    toASNGSentence,
    toNormal,
  };
};

export default useASNG;

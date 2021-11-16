let data = [1, 2, 3, 4, 5, 6, 7, 8, 10, 20, 25, 31, 32, 33, 50];
function ranges(data) {
  let string = "";
  let start = 0;
  let second = 0;

  console.log(data.length);
  //get start and second
  while (second < data.length) {
    //if there will be a gap by checking neighbor
    let diff = 1;
    if (data[second + 1] - data[second] !== 1) {
      //   output.push([data[start], data[second]]);

      if (start == second) {
        string += data[start] + ", ";
        console.log(data[start], data[second]);
        start = second + 1;
      } else {
        string += data[start] + "-" + data[second] + ", ";
        //  console.log(data[start], data[second], "second");
        start = second + 1;
      }
      //if we have an edge case if ther will be like an island
    }
    console.log(start, second);

    second++;
  }

  return string;
}
// start = 1; //idx
// second =

ranges(data);

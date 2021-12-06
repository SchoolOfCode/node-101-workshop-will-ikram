
  //console.log(myCollection);
  
  // Task 2c
  // Plan
  // create describeItem function
  // takes in an item as a parameter
  // find method to check number of items and console log different responses if more or less than 1;
  let myCollection = [
      {
        names: "School of Code mug",
        count: 1,
        whatILike: "It has my cute pixel character on it!"
      },
      {
        names: "School of Code hat",
        count: 2,
        whatILike: "An often overlooked fashion accessory"
      },
      {
        names: "School of Code pillow",
        count: 1,
        whatILike: "Eat. Sleep. Code. Repeat :)"
      }
    ];
  
  
  function describeItem(item) {
    let number = count;
if (count === 1) {
  console.log(`I have a ${names}. Heres what i like about it: ${whatILike}`);
}
else console.log(`I have ${count} ${names}. Heres what i like about them: ${whatILike}`);
  }

  describeItem(myCollection[0]);

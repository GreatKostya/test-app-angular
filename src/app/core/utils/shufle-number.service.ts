export class ShuffleNumberService {
  static shuffle<T>(array: T[]): T[] {
    let counter = array.length, temp, index;

    while (counter--) {
      index = (Math.random() * counter) | 0;

      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }
}

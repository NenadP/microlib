import uniqueRandomArray from "unique-random-array";

const data = ['foo', 'bar', 'baz'];

class Demo {

    getAll() {
        return data;
    }

    getRandom() {
        return uniqueRandomArray(data)();
    }
}

export default new Demo();
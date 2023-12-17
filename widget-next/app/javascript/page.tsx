"use client";
const Page = () => {
  const func1 = () => {
    const multiply = (a: number) => {
      return (b: number) => {
        return (c: number) => {
          return a * b * c;
        };
      };
    };
    return multiply(2)(10)(5);
  };
  const func2 = () => {
    type objType = {
      name: string;
    };
    const obj = { name: "wang" };
    function showName(this: objType, ...str: Array<string>) {
      return this.name + "," + str;
    }
    return showName.call(obj, "extra arg1", "extra arg2");
  };
  const func3 = () => {
    type objType = {
      name: string;
    };
    const obj = { name: "wang" };
    function showName(this: objType, str: Array<string>) {
      return this.name + "," + str;
    }
    return showName.call(obj, ["extra arg1", "extra arg2"]);
  };
  const func4 = () => {
    type EmployeeType = {
      name: string;
      age: number;
    };
    function Employee(this: EmployeeType, name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    Employee.prototype.getName = function () {
      return this.name;
    };
    Employee.prototype.getAge = function () {
      return this.age;
    };
    const employee = new (Employee as any)("wang", 25);
    return employee.getName() + " " + employee.getAge();
  };
  const func5 = () => {
    const outer = () => {
      let value = 1;
      return () => {
        value++;
        return value;
      };
    };
    return outer()();
  };
  const func6 = () => {
    function outer() {
      let value = 10;
      const double = () => {
        return value ** 2;
      };
      function triple() {
        return value ** 3;
      }
      return {
        double,
        triple,
      };
    }
    return outer().double() + outer().triple();
  };
  const func7 = () => {
    const namespace = (() => {
      var value = "inside iife";
      const getValue = () => {
        return value;
      };
      const getNextValue = () => {
        return value + " next";
      };
      return { getValue, getNextValue };
    })();
    return namespace.getNextValue();
  };
  const func8 = () => {
    var value = 1;
    const promise = new Promise((resolve, reject) => {
      if (value === 1) {
        resolve(1);
      } else {
        reject(value);
      }
    });
    promise
      .then((value) => {
        console.log("then1", (value as number) + 10);
        return (value as number) + 10;
      })
      .then((value) => {
        console.log("then2", value + 100);
        return value + 100;
      })
      .catch((error) => {
        console.log("error", error);
        return error - 100;
      })
      .then((value) => {
        console.log("after catch " + value);
      })
      .finally(() => {
        console.log("finally");
      });
    return "promise output in console";
  };
  const func9 = () => {
    const fetchGithubUser = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      console.log(data);
    };
    fetchGithubUser();
    return "fetch result in console";
  };
  const func10 = () => {
    type Obj1Type = {
      value?: number;
      age?: number;
    };
    const obj1: Obj1Type = {};
    obj1["value"] = 1;
    obj1.age = 20;
    console.log(obj1);
    const obj2 = new Map();
    obj2.set("value", 10);
    obj2.set("age", 200);
    console.log(obj2);
    return (
      obj1.value +
      " " +
      obj1.age +
      ", " +
      obj2.get("value") +
      " " +
      obj2.get("age")
    );
  };
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Curry: {func1()}</p>
      <p> Call:{func2()}</p>
      <p> Apply:{func3()}</p>
      <p> Prototype:{func4()}</p>
      <p> closure:{func5()}</p>
      <p> closure2:{func6()}</p>
      <p> iife:{func7()}</p>
      <p> promise:{func8()}</p>
      <p> fetch:{func9()}</p>
      <p> Object and Map:{func10()}</p>
    </div>
  );
};

export default Page;

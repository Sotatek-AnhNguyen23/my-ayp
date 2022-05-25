export interface Employee {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export const dataMock = [
  {
    id: 1,
    name: "minh son",
    email: "abc1@gmail.com",
    isActive: true,
  },
  {
    id: 2,
    name: "minh son2",
    email: "abc2@gmail.com",
    isActive: true,
  },
  {
    id: 1,
    name: "minh son3",
    email: "abc3@gmail.com",
    isActive: false,
  },
];

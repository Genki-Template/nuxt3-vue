export type Employee = {
  id: number;
  employeeName: string;
  employeeSalary: number;
  employeeAge: number;
  profileImage: string;
};

export default function employeesApi() {
  const fetchEmplyees = async () => {
    try {
      const { $api } = useNuxtApp();

      const resp = await $api.get("/employees", {});
      const employees = resp.data.data as Employee[];

      return employees;
    } catch (e) {
      return e;
    }
  };
  return { fetchEmplyees };
}

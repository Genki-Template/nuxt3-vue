import employeesApi from "@/api/Employees";

interface State {
  isLoading: boolean;
}

export default function () {
  const state = reactive<State>({
    isLoading: false,
  });

  const employeesApiInstance = employeesApi();

  const fetchEmplyees = async () => {
    state.isLoading = true;
    const employee = await employeesApiInstance.fetchEmplyees();
    state.isLoading = false;
    return employee;
  };

  return {
    get state() {
      return state;
    },
    fetchEmplyees,
  };
}

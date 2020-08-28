import {Employee} from "../src/employee";

const employeeTest = require('ava');

employeeTest('should_return_user_info_when_employee_to_string_given_name_sam_and_type_engineer', t => {
    //given
    let name = "sam";
    let type = "engineer";
    let employee = new Employee(name, type);
    //when
    let result = employee.toString();
    let expect = "sam (engineer)";
    t.is(result, expect)
});
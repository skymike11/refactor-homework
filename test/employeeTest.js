import {createEmployee, Employee} from "../src/employee";

const employeeTest = require('ava');

employeeTest('should_return_user_info_when_employee_to_string_given_name_sam_and_type_engineer', t => {
    //given
    let name = "sam";
    let type = "engineer";
    let employee = createEmployee(name, type);
    //when
    let result = employee.toString();
    let expect = "sam (engineer)";
    t.is(result, expect)
});


employeeTest('should_return_exception_info_when_validate_employee_type_given_name_sam_and_type_teacher', t => {
    //given
    let name = "sam";
    let type = "teacher";
    let result = "";
    try {
        let employee = createEmployee(name, type);
    }catch (e) {
        result = e.message;
    }
    //when
    let expect = "Employee cannot be of type teacher";
    t.is(result, expect)
});
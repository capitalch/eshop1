const form1 = [
    {
        type: 'meta'
        , client: {
            title: 'Employee Entry'
            , class: 'basic-style-1 custom1 basic-style-2 validation-text'
            , validationtext: ' indicates required field'
        }
        , id: 'gx-form1'
    }, {
        type: 'mat-input'
        , subtype: 'text'
        , id: 'fname'
        , name: 'firstName'
        , label: 'First Name'
        , placeholder: 'First name'
        , value: ''
        , class: 'myClass1'
        , validation: {
            required: { message: '$ is required' }
        }
    }, {
        type: 'mat-input'
        , subtype: 'text'
        , id: 'lname'
        , name: 'lastName'
        , label: 'Last Name'
        , placeholder: 'Last Name'
        , value: ''
        , class: 'myClass1'
        , validation: {
            required: { message: '$ is required' }
        }
    }, {
        type: 'mat-select'
        , label: 'Department'
        , value: ''
        , id: 'department'
        , options: 'dept'
        , validation: {
            required: {
                message: 'You must select a value for $'
            }
        }
    }, {
        type: 'mat-radio'
        , label: 'Gender'
        , value: 'M'
        , id: 'gender'
        , options: [
            { name: 'Male', value: 'M', id: 'male' }
            , { name: 'Female', value: 'F', id: 'female' }
        ]
        , validation: {
            required: { message: '$ is required' }
        }
    }, {
        type: 'mat-checkboxgroup'
        , label: 'Type'
        , id: 'type'
        , validation: {
            required: { message: '$ is required' }
        }
        , options: 'type'
    }, {
        type: 'mat-textarea'
        , id: 'address'
        , label: 'Address'
        , placeholder: 'Address'
        , validation: {
            required: { message: '$ is required' },
            minlength: { value: 5, message: 'Minimum length for $ is 5' },
            maxlength: { value: 200, message: 'Maximum length for $ is 200' }
        }
    }, {
        type: 'mat-button'
        , subType: 'raised'
        , faClass: 'fa fa-taxi fa-fw'
        , id: 'submit'
        , color: 'primary'
        , label: 'Submit'
        , validateForm: true
    }
];
export { form1 };






// const form1 = [
//     {
//         type: 'meta'
//         , client: {
//             title: 'Test form'
//             , class: 'basic-style-1 custom1 basic-style-2 validation-text'

//             // , validation: {
//             //     // groupValidator1: { message: 'Data is not correct' }
//             //     // ,
//             //     groupAsyncValidator1: {
//             //         message: 'Async validation failed'
//             //         , arg: {
//             //             url: 'http://localhost:3002/group'
//             //         }
//             //         , async: true
//             //     }
//             // }
//             , validationtext: ' indicates required field'
//         }
//         , id: 'gx-form1'
//     }
//     , {
//         type: 'checkbox'
//         , id: 'agreed9'
//         , label: 'Agreed'
//         , value: true
//         , validation: {
//             required: { message: '$ is required' }
//         }
//     }
//     ,
//     {
//         type: 'array'
//         , label: 'Tags'
//         , id: 'tags'
//         , class: {
//             div: 'array-div'
//             , button2: 'array-button2'
//         }
//         , validation: {
//             // groupValidator1: { message: '$ are not correct' }
//             // ,
//             groupAsyncValidator1: {
//                 message: 'Async validation failed'
//                 , arg: {
//                     url: 'http://localhost:3002/group'
//                 }
//                 , async: true
//             }
//         }
//         , group: {
//             label: 'Tag'
//             , validation: {
//                 // groupValidator1: { message: '$ is not correct' }
//                 // ,
//                 groupAsyncValidator1: {
//                     message: 'Async validation failed'
//                     , arg: {
//                         url: 'http://localhost:3002/group'
//                     }
//                     , async: true
//                 }
//             }
//             , controls: [
//                 // {

//                 {
//                     type: 'textarea'
//                     , id: 'firstName'
//                     , label: 'First name'
//                     , placeholder: 'First name'
//                     , value: ''
//                     , style: { color: 'red' }
//                     , class: { label: 'red-class', element: 'textarea-class' }
//                     // , validation: {
//                     //     required: { message: '$ is required' },
//                     //     minlength: { value: 3, message: 'Minimum length for $ is 3' },
//                     //     maxlength: { value: 10, message: 'Maximum length for $ is 10' }
//                     // }
//                 }

//             ]
//         }
//     }

//     ,
//     {
//         type: 'mat-input'
//         , subtype: 'text'
//         , id: 'id1'
//         , name: 'myName'
//         , label: 'First name2'
//         , placeholder: 'First name2'
//         , value: ''
//         , class: 'myClass1'
//         // , style: { 'margin-top': '8px', 'width': '100%' }
//         // , remove: true
//         , validation: {
//             required: { message: '$ is required' }
//         }
//     }

//     ,
//     {
//         type: 'mat-input'
//         , subtype: 'text'
//         , id: 'id2'
//         , name: 'myName1'
//         , label: 'First name1 label'
//         , placeholder: 'First name1 placeholder'
//         , value: ''
//         , class: 'label-name'
//         , style: {
//             'mat-label': { color: 'green' }
//             , input: { color: 'red' }
//         }
//         , remove: true
//         , validation: {
//             required: { message: '$ is required' }
//         }
//     }

//     , {
//         type: 'mat-checkboxgroup'
//         , label: 'Food3'
//         , id: 'food3'
//         , validation: {
//             required: { message: '$ is required' }
//         }
//         , options: 'food4'
//     }
//     , {
//         type: 'checkboxgroup'
//         , label: 'Food4'
//         , id: 'food4'
//         , validation: {
//             required: { message: '$ is required' }
//         }
//         , options: 'food3'
//     }
//     , {
//         type: 'mat-autocomplete'
//         , label: 'mat autocomplete'
//         , id: 'autocomplete1'
//         , placeholder: 'Mat Autocomplete'
//         , options: 'names2'
//     }

//     , {
//         type: 'checkboxgroup'
//         , label: 'Food2'
//         , id: 'food2'
//         , validation: {
//             required: { message: '$ is required' }
//         }
//         , options: [
//             { name: 'Main course', value: false, id: 'main2' }
//             , { name: 'Desert', value: true, id: 'desert2' }
//             , { name: 'beverages', value: false, id: 'beverages2' }
//         ]
//     }
//     // , {
//     //     type: 'custom1'
//     //     , id: 'custom1'
//     //     , label: 'Custom control'
//     //     , placeholder: 'My custom control'
//     //     , class: { label: 'red-class', element: 'textarea-class' }
//     // }
//     ,
//     {
//         type: 'textarea'
//         , id: 'firstName'
//         , label: 'First name'
//         , placeholder: 'First name'
//         , value: ''
//         // , class: ''
//         // , validation: {
//         //     groupAsyncValidator1: {
//         //         message: 'Async validation failed'
//         //         , arg: {
//         //             url: 'http://localhost:3002/group'
//         //             , delay: 1000
//         //         }
//         //         , async: true
//         //     }
//         //     ,
//         //     required: { message: '$ is required' }
//         //     , minlength: { value: 3, message: 'Minimum length for $ is 3' }
//         //     , maxlength: { value: 10, message: 'Maximum length for $ is 10' }
//         // }
//     }

//     ,
//     {
//         type: 'input'
//         , id: 'firstName2'
//         , subtype: 'text'
//         , label: 'First name2'
//         , placeholder: 'First name2'
//         , value: ''
//         , remove: true
//         , name: 'input1'
//         // , validation: {
//         //     required: {message: '$ is required'}
//         // }
//     }
//     ,
//     {
//         type: 'anchor'
//         , id: 'myAnchor'
//         , label: 'This is my anchor'
//         , href: 'http://google.com'
//     }
//     ,
//     {
//         type: 'textarea'
//         , id: 'firstName-1'
//         , label: 'First name1'
//         , placeholder: 'First name1'
//         , value: ''
//         , validation: {
//             required: { message: '$ is required' }
//         }
//     }

//     , {
//         type: 'checkbox'
//         , id: 'agreed'
//         , label: 'Agreed'
//         , value: true
//         , validation: {
//             required: { message: '$ is required' }
//         }
//     }
//     ,
//     {
//         type: 'mat-radio'
//         , label: 'Gender'
//         , value: 'M'
//         , id: 'gender123'
//         , options: 'genders4'
//         , validation: {
//             required: { message: '$ is required' }
//         }
//     }
//     , {
//         type: 'select'
//         , label: 'Country'
//         , value: ''
//         , id: 'country'
//         , options: 'countries3'
//         , validation: {
//             required: {
//                 message: 'You must select a value for $'
//             }
//         }
//     }
//     // , {
//     //     type: 'mat-checkbox'
//     //     , id: 'agreed'
//     //     , label: 'Agreed'
//     //     , value: true
//     //     , validation: {
//     //         required: { message: '$ is required' }
//     //     }
//     // }
//     // ,
//     // {
//     //     type: 'radio'
//     //     , label: 'Gender1'
//     //     , value: 'M'
//     //     , id: 'gender1234'
//     //     , options: 'genders3'
//     //     , validation: {
//     //         required: { message: '$ is required' }
//     //     }
//     // }
//     // , {
//     //     type: 'mat-select'
//     //     , label: 'Country'
//     //     , value: ''
//     //     , id: 'country'
//     //     , options: 'countries3'
//     //     , validation: {
//     //         required: {
//     //             message: 'You must select a value for $'
//     //         }
//     //     }
//     // }

//     // , {
//     //     type: 'mat-input'
//     //     , id: 'firstName'
//     //     , placeholder: 'First name'
//     //     , label: 'First name'
//     //     , value: 'abcd'
//     //     , validation: {
//     //         // groupAsyncValidator1: {
//     //         //     message: 'Async validation failed'
//     //         //     , arg: {
//     //         //         url: 'http://localhost:3002/group'
//     //         //         , delay: 1000
//     //         //     }
//     //         //     , async: true
//     //         // }
//     //         // ,
//     //         required: { message: '$ is required' }
//     //         , minlength: { value: 3, message: 'Minimum length for $ is 3' }
//     //         , maxlength: { value: 10, message: 'Maximum length for $ is 10' }
//     //     }
//     // }
//     // ,
//     // {
//     //     type: 'mat-datepicker',
//     //     id: 'matDatePicker1',
//     //     placeholder: 'select a date'
//     //     , label: 'myDatePicker'
//     //     , locale: 'en-GB'
//     //     , validation: {
//     //         required: {
//     //             message: 'You must surely select a value for $'
//     //         }
//     //     }
//     // }
//     // , {
//     //     type: 'select'
//     //     , label: 'Country'
//     //     , value: ''
//     //     , id: 'country'
//     //     , options: 'countries3'
//     //     , validation: {
//     //         required: {
//     //             message: 'You must select a value for $'
//     //         }
//     //     }
//     // }
//     // , {
//     //     type: 'checkboxgroup'
//     //     , label: 'Food2'
//     //     , id: 'food2'
//     //     , validation: {
//     //         required: { message: '$ is required' }
//     //     }
//     //     , options: [
//     //         { name: 'Main course', value: false, id: 'main2' }
//     //         , { name: 'Desert', value: true, id: 'desert2' }
//     //         , { name: 'beverages', value: false, id: 'beverages2' }
//     //     ]
//     // }

//     ,
//     {
//         type: 'array'
//         , label: 'Tags'
//         , id: 'tags'
//         // , validation: {
//         //     // groupValidator1: { message: '$ are not correct' }
//         //     // ,
//         //     groupAsyncValidator1: {
//         //         message: 'Async validation failed'
//         //         , arg: {
//         //             url: 'http://localhost:3002/group'
//         //         }
//         //         , async: true
//         //     }
//         // }
//         , group: {
//             label: 'Tag'
//             // , validation: {
//             //     // groupValidator1: { message: '$ is not correct' }
//             //     // ,
//             //     groupAsyncValidator1: {
//             //         message: 'Async validation failed'
//             //         , arg: {
//             //             url: 'http://localhost:3002/group'
//             //         }
//             //         , async: true
//             //     }
//             // }
//             , controls: [
//                 // {

//                 {
//                     type: 'textarea'
//                     , id: 'firstName'
//                     , label: 'First name'
//                     , placeholder: 'First name'
//                     , value: ''
//                     , style: { color: 'red' }
//                     , class: { label: 'red-class', element: 'textarea-class' }
//                     // , validation: {
//                     //     required: { message: '$ is required' },
//                     //     minlength: { value: 3, message: 'Minimum length for $ is 3' },
//                     //     maxlength: { value: 10, message: 'Maximum length for $ is 10' }
//                     // }
//                 }

//             ]
//         }
//     }
//     // ,
//     // {
//     //     type: 'group'
//     //     , label: 'Passwords'
//     //     , name: 'Group1'
//     //     , id: 'pwd'
//     //     // , validation: {
//     //     //     groupValidator1: { message: '$ is not correct for group' }
//     //     //     // ,
//     //     //     // groupAsyncValidator1: {
//     //     //     //     message: 'Async validation failed'
//     //     //     //     , arg: {
//     //     //     //         url: 'http://localhost:3002/group'
//     //     //     //     }
//     //     //     //     , async: true
//     //     //     // }
//     //     // }
//     //     , controls: [
//     //         {
//     //             type: 'textarea'
//     //             , id: 'agreed'
//     //             , label: 'Agreed'
//     //             , value: 'abcd'
//     //             // , validation: {
//     //             //     required: { message: '$ is required' }
//     //             //     ,
//     //             //     groupAsyncValidator1: {
//     //             //         message: 'Async validation failed'
//     //             //         , arg: {
//     //             //             url: 'http://localhost:3002/group'
//     //             //         }
//     //             //         , async: true
//     //             //     }
//     //             // }
//     //         }
//     //         , {
//     //             type: 'name-value-input'
//     //             // , id: 'nv1'


//     //         }
//     //     ]
//     // }
//     // , {
//     //     type: 'submit'
//     //     , label: 'submit'
//     //     , class: 'btn btn-primary'
//     //     , actionId: 'submit'
//     // }
//     // , {
//     //     type: 'button'
//     //     , label: 'My Submit'
//     //     , class: 'btn btn-primary'
//     //     , id: 'mySubmit'
//     //     , validateForm: true
//     // }

//     , {
//         type: 'buttongroup'
//         , class: ''
//         , id: 'button-group'
//         , controls: [
//             {
//                 type: 'button'
//                 , label: 'Submit2'
//                 , class: 'btn btn-primary'
//                 , id: 'submit2'
//                 , validateForm: true
//             }
//             , {
//                 type: 'button'
//                 , subtype: 'reset'
//                 , id: 'reset'
//                 , label: 'Cancel'
//                 , class: 'btn btn-primary'
//                 , actionId: 'cancel1'
//             }
//         ]
//     }
//     , {
//         type: 'mat-button'
//         , subType: 'raised'
//         , faClass: 'fa fa-taxi fa-fw'
//         , id: 'submit1'
//         , color: 'primary'
//         , label: 'Add'
//         , validateForm: true
//     }

// ];
// export { form1 };

    // documentation new
    // ,
    // {
    //     type: 'input'
    //     , subtype: 'text'
    //     , name: 'myName2'
    //     , label: 'First name2'
    //     , placeholder: 'First name2'
    //     , value: ''
    //     , style: {
    //         label: { color: 'brown' }
    //         , input: { color: 'red' }
    //     }
    //     // , remove: true
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }

    // , {
    //     type: 'button'
    //     , label: 'Submit'
    //     , class: { button: 'btn btn-primary', div: 'button-right' }
    //     , id: 'submit1'
    //     , validateForm: true
    // }

    // , {
    //     type: 'buttongroup'
    //     , id: 'button-group'
    //     , style: { div: { 'text-align': 'right' } }
    //     , controls: [
    //         {
    //             type: 'button'
    //             , label: 'Submit2'
    //             , class: 'btn btn-primary'
    //             , id: 'submit2'
    //             , validateForm: true
    //             , style: { div: { display: 'inline-block' } }
    //         }
    //         , {
    //             type: 'button'
    //             , subtype: 'reset'
    //             , id: 'reset'
    //             , label: 'Cancel'
    //             , class: 'btn btn-primary'
    //             , style: { div: { display: 'inline-block' } }
    //         }
    //     ]
    // }

    /* dynamic prefix is used to denote the div, label, input and button
    which are part of an input control. The input control is added dynamically and
    style and class valued prefixed by dynamic will refer to corresponding controls of
    that dynamic input control. Note that empty style must be put as {} and not ''
    otherwise it will not work.
    */
//    , {
//     type: 'name-value-input'
//     , options: 'names2'
//     , id: 'nv1'
//     , class: {
//         'dynamic-div': '',
//         'dynamic-label': '',
//         'dynamic-input': '',
//         'dynamic-button': '',
//         'dynamic-i': ''
//     }
//     , style: {
//         'dynamic-div': {},
//         'dynamic-label': { color: 'red', width: '30%' },
//         'dynamic-input': { color: 'red', width: '50%' },
//         'dynamic-button': {},
//         'dynamic-i': {}
//     }
// }

// , {
//     type: 'anchor'
//     , href: 'http://www.microsoft.com'
//     , label: 'Some label'
//     , class: ''
//     , style: {
//         a: { color: 'red' }
//     }
// }






    // old documentation
    // , {
    //     type: 'checkboxgroup'
    //     , label: 'Food2'
    //     , id: 'food2'
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    //     , options: [
    //         { name: 'Main course', value: false, id: 'main2' }
    //         , { name: 'Desert', value: true, id: 'desert2' }
    //         , { name: 'beverages', value: false, id: 'beverages2' }
    //     ]
    // }
    // Group level sync and async validation
    // ,
    // {
    //     type: 'group'
    //     , label: 'Passwords'
    //     , id: 'pwd'
    //     , validation: {
    //         groupValidator1: { message: '$ is not correct' }
    //         , groupAsyncValidator1: {
    //             message: 'Async validation failed'
    //             , arg: {
    //                 url: 'http://localhost:3002/group'
    //             }
    //             , async: true
    //         }
    //     }
    //     , controls: [
    //         {
    //             type: 'checkbox'
    //             , id: 'agreed'
    //             , label: 'Agreed'
    //             , value: true
    //             , validation: {
    //                 required: { message: '$ is required' }
    //             }
    //         }
    //     ]
    // }
    // {
    //     type: 'meta'
    //     , client: {
    //         formClass: 'form-style-1',
    //         title: 'Test form',
    //         titleClass: 'header',
    //         bodyClass: 'body'
    //     }
    //     , id: 'jx-address'
    // }
    // ,
    // {
    //     type: 'textarea'
    //     , class: {parent:'textarea-test'}
    //     , id: 'address1'
    //     , label: 'Address'
    //     , placeholder: 'Address'
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: 'text'
    //     , id: 'tagValue'
    //     , class: 'tag-class'
    //     , label: 'Tag value'
    //     , placeholder: 'Tag value'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // ,
    // {
    //     type: 'mat-datepicker',
    //     id: 'matDatePicker1',
    //     placeholder: 'select a date'
    //     , label: 'myDatePicker'
    //     , locale: 'en-GB'
    //     , validation: {
    //         required: {
    //             message: 'You must surely select a value for $'
    //         }
    //     }
    // }
    // , {
    //     type: 'mat-input'
    //     , subType: 'text'
    //     , id: 'mat1'
    //     , label: 'mat name'
    //     , placeholder: 'mat placeholder'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // , {
    //     type: 'anchor'
    //     , href: 'http://www.microsoft.com'
    //     , label: 'Some label'

    // }

    // mat-button
    // subType can be button, icon, raised, fab, mini-Fab
    // color can be primary, danger, accent and warn
    // , {
    //     type: 'mat-button'
    //     , subType:'mini-fab'
    //     , faClass:'fa fa-taxi fa-fw'
    //     , color:'primary'
    //     // , label: 'My Taxi'
    //     , actionId: 'submit2'
    //     , validateForm:true
    // }
// ,
    // {
    //     type: 'group'
    //     , label: 'Passwords'
    //     , id: 'pwd'
    //     , controls: [
    //         {
    //             type: 'checkbox'
    //             , id: 'agreed'
    //             , label: 'Agreed'
    //             , value: false
    //             , validation: {
    //                 required: { message: '$ is required' }
    //             }
    //         }
    //         , {
    //             type: 'group'
    //             , id: 'Agreement1'
    //             , label: 'Agreement'
    //             , controls: [
    //                 {
    //                     type: 'checkbox'
    //                     , id: 'agreed11'
    //                     , label: 'Agreed'
    //                     , value: true
    //                 }
    //                 , {
    //                     type: 'group'
    //                     , id: 'Agreement1'
    //                     , label: 'Agreement'
    //                     , controls: [
    //                         {
    //                             type: 'checkbox'
    //                             , id: 'agreed111'
    //                             , label: 'Agreed11'
    //                             , value: true
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //         ,
    //         {
    //             type: 'textarea'
    //             , id: 'address'
    //             , label: 'Address'
    //             , placeholder: 'Address'
    //             , value: '12345'
    //             , validation: {
    //                 required: { message: '$ is required' },
    //                 minlength: { value: 5, message: 'Minimum length for $ is 5' },
    //                 maxlength: { value: 200, message: 'Maximum length for $ is 200' }
    //             }
    //         }
    //     ]
    // }

    // ,
    // {
    //     type: 'groupArray'
    //     , label: 'Tags'
    //     , id: 'tags'
    //     , group: {
    //         label: 'Tag'
    //         , id: 'tag'
    //         , controls: [
    //             {
    //                 type: 'mat-checkbox'
    //                 , id: 'agreed8'
    //                 , label: 'Agreed'
    //                 , value: false
    //             }
    //             , {
    //                 type: 'textarea'
    //                 , id: 'firstName'
    //                 , label: 'First name'
    //                 , placeholder: 'First name'
    //                 , value: ''
    //                 , class: { label: 'red-class', element: 'textarea-class' }
    //                 , validation: {
    //                     required: { message: '$ is required' },
    //                     minlength: { value: 3, message: 'Minimum length for $ is 3' },
    //                     maxlength: { value: 10, message: 'Maximum length for $ is 10' },
    //                     myValidate: {
    //                         message: 'My validation fails'
    //                         , arg: 'test'
    //                     }
    //                 }
    //             }
    //             , {
    //                 type: 'checkbox'
    //                 , id: 'agreed9'
    //                 , label: 'Agreed'
    //                 , value: true
    //             }
    //             , {
    //                 type: 'checkboxgroup'
    //                 , label: 'Food2'
    //                 , id: 'food2'
    //                 , validation: {
    //                     required: { message: '$ is required' }
    //                 }
    //                 , options: [
    //                     { name: 'Main course', value: false, id: 'main2' }
    //                     , { name: 'Desert', value: true, id: 'desert2' }
    //                     , { name: 'beverages', value: false, id: 'beverages2' }
    //                 ]
    //             }
    //             , {
    //                 type: 'radio'
    //                 , label: 'Gender'
    //                 , value: 'M'
    //                 , id: 'gender123'
    //                 , options: [
    //                     { name: 'Male', value: 'M', id: 'male1' }
    //                     , { name: 'Female', value: 'F', id: 'female1' }
    //                 ]
    //             }
    //             , {
    //                 type: 'select'
    //                 , label: 'Country'
    //                 , value: ''
    //                 , id: 'country'
    //                 , options: 'countries3'
    //                 , validation: {
    //                     required: {
    //                         message: 'You must select a value for $'
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // }

// , {
    //     type: 'select'
    //     , label: 'Country'
    //     , value: ''
    //     , id: 'country1'
    //     , options:'countries3'
    //     , validation: {
    //         required:{
    //             message:'You must surely select a value for $'
    //         }
    //     }
    // }
    // , {
    //     type: 'mat-textarea'
    //     , id: 'tagValue'
    //     , class: 'tag-class'
    //     , label: 'Tag value'
    //     , placeholder: 'Tag value'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // , {
    //     type: 'mat-input'
    //     , subType: 'text'
    //     , id: 'mat1'
    //     , label: 'mat name'
    //     , placeholder: 'mat placeholder'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // ,
    // {
    //     type: 'mat-radio'
    //     , label: 'Gender'
    //     , value: 'M'
    //     , id: 'gender12'
    //     , options: [
    //         { name: 'Male', value: 'M', id: 'male1' }
    //         , { name: 'Female', value: 'F', id: 'female1' }
    //     ]
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: 'mat-select'
    //     , label: 'Country'
    //     , value: ''
    //     , id: 'country'
    //     , options: 'countries3'
    //     , validation: {
    //         required:{message:'Value is required'}
    //     }
    // }
    // ,
    // {
    //     type: 'textarea'
    //     , id: 'address'
    //     , class: {
    //         label: 'label-address-class'
    //         , element: 'element-address-class'
    //         , parent: 'parent-address-class'
    //     }
    //     , label: 'Address'
    //     , placeholder: 'Address'
    //     , value: '12345'
    //     , validation: {
    //         required: { message: '$ is required' },
    //         minlength: { value: 5, message: 'Minimum length for $ is 5' },
    //         maxlength: { value: 200, message: 'Maximum length for $ is 200' }
    //     }
    // }
    // , {
    //     type: 'checkbox'
    //     , id: 'agreed'
    //     , label: 'Agreed'
    //     , value: false
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }, {
    //     type: 'checkboxgroup'
    //     , label: 'Food2'
    //     , id: 'food2'
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    //     , options: [
    //         { name: 'Main course', value: false, id: 'main2' }
    //         , { name: 'Desert', value: true, id: 'desert2' }
    //         , { name: 'beverages', value: false, id: 'beverages2' }
    //     ]
    // }
    // ,
    // {
    //     type: 'radio'
    //     , label: 'Gender'
    //     , value: 'M'
    //     , id: 'gender123'
    //     , options: [
    //         { name: 'Male', value: 'M', id: 'male1' }
    //         , { name: 'Female', value: 'F', id: 'female1' }
    //     ]
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // ,
    // {
    //     type: 'mat-checkbox'
    //     , id: 'agreed3'
    //     , label: 'Agreed'
    //     , value: false
    // }
    // ,
    // , {
    //     type: 'text'
    //     , id: 'email1'
    //     , label: 'email1'
    //     , placeholder: 'email'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is required' },
    //         email1: {
    //             message: 'Your email is invalid'
    //             , arg: {
    //                 url: 'http://localhost:3002/email'
    //             }
    //             , async: true
    //         },
    //         email2: {
    //             message: 'Sync email invalid'
    //             , arg: 'test'
    //         }
    //     }
    // }
    // , {
    //     type: 'checkboxgroup'
    //     , label: 'Food2'
    //     , id: 'food2'
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    //     , options: [
    //         { name: 'Main course', value: false, id: 'main2' }
    //         , { name: 'Desert', value: true, id: 'desert2' }
    //         , { name: 'beverages', value: false, id: 'beverages2' }
    //     ]
    // }

    // , {
    //     type: 'select'
    //     , label: 'Country'
    //     , value: '0'
    //     , id: 'country'
    //     , options: [
    //         { name: '---Choose---', value: '0' }
    //         , { name: 'USA', value: 'us' }
    //         , { name: 'India', value: 'in' }
    //     ]
    //     , validation: {
    //         selectRequired: {
    //             message: 'You must select a value for $'
    //             , arg: 0
    //         }
    //     }
    // }

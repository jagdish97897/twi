

const mongoose = require('mongoose');

const partiesRegistrationSchema = new mongoose.Schema({
    type: { type: String, enum: ['Customer1', 'Customer2'], required: true },
    code: { type: String, required: true },
    lastCode: String,
    name: { type: String, required: true },
    printAs: String,
    group: String,
    expenseType: String,
    subType: String,
    controllingBranch: String,
    parentAccount: String,
    contact: {
        Address: { type: String, required: true },
        City: { type: String, required: true },
        PIN: { type: String, required: true },
        State: { type: String, required: true },
        Country: { type: String, required: true },
        Person: { type: String, required: true },
        Landline: String,
        Designation: String,
        Mobile: { type: String, required: true },
        Email: { type: String, required: true },
        Fax: String,
        Remarks: String,
    },
    correctAddress: {
        Address: { type: String, required: true },
        PIN: { type: String, required: true },
        City: { type: String, required: true },
        State: { type: String, required: true },
        Country: { type: String, required: true },
        Remarks: String,
    },
         gst:{
       registrationType: { type: String, enum: ['Registered-Regular', 'Unregular', 'cunsumer', 'EOU', 'Overseas', 'Registered-Composition', 'SEZ', 'UIN-holder'], required: true },
       servicesType: { type: String, enum: ['GOODS', 'SERVICES'], required: true },
       defaultGST: { type: String, enum: ['CONSIGNEE', 'CONSIGNOR','GST12', 'GST18', 'GST5', 'GST5%(RCM)', 'GST NEW', 'GST NULL'], required: true },
       GSTIN: String,
       Remarks: String,
     },
    tds:{
        PAN: String,
        TANNo: String,
        declarationFor: { type: String, enum: ['EXEMPTION', 'LOWER RATE'], required: true },
        tdsStatus: { type: String, enum: ['.25','COMPANY', 'OTHER THAN COMPANY'], required: true },
        tdsCode: { type: String, enum: ['19411', 'TT'], required: true },
        natureOfPayment: String,
        tdsSection: String,
        exemptionCertNo: String,
        exemptionLimit: String,
        validUpto: Date,
        PANImage: String,
        imageOfDeclaration: String,
        remarks: String,
    },
    itr:{
        ITRNo: String,
        ITRSubmissionDate: Date,
        ITRAttachment: String,
        Remarks: String
    },
    generalDetails: {
        marketingPerson: String,
        bankUploadPrefix: String,
        partyStatus: { type: String, enum: ['blacklisted', 'stop payment'],required: true },
        paymentMethod: { type: String, enum: ['TO BB', 'CASH', 'FOC', 'TO PAY'],required: true },
        paymentTerms: String,
        creditLimit: String,
        allocated: { type: String, enum: ['Consignment', 'bill', 'manifest', 'vehical Hire', 'Vehicle', 'Cost Center', 'Job Wise'],required: true },
        deliveryPaymentMode: { type: String, enum: ['CASH', 'CHEQUE', 'CREDIT', 'MULTI', 'OTHER'],required: true },
        deliveryAt: { type: String, enum: ['DIRECT', 'DOOR', 'DOOR TO DOOR', 'DOOR TO TERMINAL', 'GODOWN', 'LOCAL DELIVERY', 'TERMINAL TO DOOR', 'TERMINAL TO TERMINAL'],required: true },
        outstandingAmt: String,
        graceDays: Number,
        lockDate: Date,
        paymentBase: { type: String, enum: ['BOTH', 'VEHICAL HIRE', 'MANIFEST'],required: true },
        billFor: String,
        billAttachReport: String,
        urlForTracking: String,
        consignmentAttachReport: { type: String, enum: ['PrintConsignment.rpt', 'PrintConsignmentDedicated.rpt', 'PrintConsignmentLabel.rpt', 'PrintConsignment_VTPL.rpt'],required: true },
        introDate: Date,
        closeDate: Date,
        remarks: String
    },
    bankDetails:{
        bankName: String,
        ifscCode: String,
        mobile: String,
        email: String,
        branchName: String,
        bankAccountNo: String,
        beneficiaryName: String,
        cancelledChequeOrPassbook: String,
        remarks: String
    }

});




module.exports = mongoose.model('partiesRegistration', partiesRegistrationSchema);



// const mongoose = require('mongoose');

// const partiesRegistrationSchema = new mongoose.Schema({
//     type: { type: String, enum: ['customer', 'broker', 'driver', 'vehicle'], required: true },
//     code: { type: String, required: true },
//     lastCode: String,
//     name: { type: String, required: true },
//     printAs: String,
//     group: String,
//     expenseType: String,
//     subType: String,
//     controllingBranch: String,
//     parentAccount: String,
//     contact: {
//         Address: { type: String, required: true },
//         City: { type: String, required: true },
//         PIN: { type: String, required: true },
//         State: { type: String, required: true },
//         Country: { type: String, required: true },
//         Person: { type: String, required: true },
//         Landline: String,
//         Designation: String,
//         Mobile: { type: String, required: true },
//         Email: { type: String, required: true },
//         Fax: String,
//         Remarks: String,
//     },
//     correctAddress: {
//         Address: { type: String, required: true },
//         PIN: { type: String, required: true },
//         City: { type: String, required: true },
//         State: { type: String, required: true },
//         Country: { type: String, required: true },
//         Remarks: String,
//     },
//          gst:{
//        registrationType: { type: String, enum: ['Registered-Regular', 'Unregular', 'cunsumer', 'EOU', 'Overseas', 'Registered-Composition', 'SEZ', 'UIN-holder'], required: true },
//        servicesType: { type: String, enum: ['GOODS', 'SERVICES'], required: true },
//        defaultGST: { type: String, enum: ['CONSIGNEE', 'CONSIGNOR','GST12', 'GST18', 'GST5', 'GST5%(RCM)', 'GST NEW', 'GST NULL'], required: true },
//        GSTIN: String,
//        Remarks: String,
//      },
//     tds:{
//         PAN: String,
//         TANNo: String,
//         declarationFor: { type: String, enum: ['EXEMPTION', 'LOWER RATE'], required: true },
//         tdsStatus: { type: String, enum: ['.25','COMPANY', 'OTHER THAN COMPANY'], required: true },
//         tdsCode: { type: String, enum: ['19411', 'TT'], required: true },
//         natureOfPayment: String,
//         tdsSection: String,
//         exemptionCertNo: String,
//         exemptionLimit: String,
//         validUpto: Date,
//         PANImage: String,
//         imageOfDeclaration: String,
//         remarks: String,
//     },
//     itr:{
//         ITRNo: String,
//         ITRSubmissionDate: Date,
//         ITRAttachment: String,
//         Remarks: String
//     },
//     generalDetails: {
//         marketingPerson: String,
//         bankUploadPrefix: String,
//         partyStatus: { type: String, enum: ['blacklisted', 'stop payment'],required: true },
//         paymentMethod: { type: String, enum: ['TO BB', 'CASH', 'FOC', 'TO PAY'],required: true },
//         paymentTerms: String,
//         creditLimit: String,
//         allocated: { type: String, enum: ['Consignment', 'bill', 'manifest', 'vehical Hire', 'Vehicle', 'Cost Center', 'Job Wise'],required: true },
//         deliveryPaymentMode: { type: String, enum: ['CASH', 'CHEQUE', 'CREDIT', 'MULTI', 'OTHER'],required: true },
//         deliveryAt: { type: String, enum: ['DIRECT', 'DOOR', 'DOOR TO DOOR', 'DOOR TO TERMINAL', 'GODOWN', 'LOCAL DELIVERY', 'TERMINAL TO DOOR', 'TERMINAL TO TERMINAL'],required: true },
//         outstandingAmt: String,
//         graceDays: Number,
//         lockDate: Date,
//         paymentBase: { type: String, enum: ['BOTH', 'VEHICAL HIRE', 'MANIFEST'],required: true },
//         billFor: String,
//         billAttachReport: String,
//         urlForTracking: String,
//         consignmentAttachReport: { type: String, enum: ['PrintConsignment.rpt', 'PrintConsignmentDedicated.rpt', 'PrintConsignmentLabel.rpt', 'PrintConsignment_VTPL.rpt'],required: true },
//         introDate: Date,
//         closeDate: Date,
//         remarks: String
//     },
//     bankDetails:{
//         bankName: String,
//         ifscCode: String,
//         mobile: String,
//         email: String,
//         branchName: String,
//         bankAccountNo: String,
//         beneficiaryName: String,
//         cancelledChequeOrPassbook: String,
//         remarks: String
//     },
//     applicationBranch: {
//         type: String,
//         enum: [
//             'AGENCY',
//             'BANGALORE',
//             'BARODA',
//             'CHENNAI',
//             'CUTTACK BRANCH',
//             'DELHI BRANCH',
//             'HO-NSP',
//             'HYDERABAD',
//             'JABALPUR',
//             'KATANI',
//             'KOLKATA',
//             'KOTA',
//             'MUMBAI',
//             'NAGPUR',
//             'PUNE',
//             'RAIPUR',
//             'RO-KOLKATA',
//             'SAHARANPUR',
//             'YAMUNA NAGAR'
//         ],
//         required: true
//     }

// });

// module.exports = mongoose.model('partiesRegistration', partiesRegistrationSchema);




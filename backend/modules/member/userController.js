const { copyFileSync } = require('fs');
const connection = require('../../dbConnection');
const qrCode = require("qrcode");
const util = require('util');
const toDataURLPromise = util.promisify(qrCode.toDataURL);
const jwt = require('jsonwebtoken')

const  getMember = async(member) => {
    //console.log(member)
    const conn = await connection.getConnection();
console.log(member)

    const res = await conn.request()
    .input("nMemvarID", member.memberID)
    
    
    
    .execute("Get_LIB_Member_Records");
    return res.recordset;

}

//Create jwt
const createToken = (userRank) => {
    return jwt.sign({userRank}, 'erbr4br634b6erbt6b1s36trb1', {
        expiresIn: '1h'
    })
}

//Login handler
const loginHandler = async (member,res) => {
    
    try {
        console.log("login hit")
        const conn = await connection.getConnection();
        const result = await conn.request()
            .input("cFtyCode", member.ftyCode)
            .input("cEpfNo", member.epf)
            .input("cPassWord", member.password)
            .execute("Get_TestLIB_MemberAccount");

        if (result.recordset !== null) {
            const user = { rank: result.recordset[0].cMemberRankCode };
            const token = createToken(user.rank);
console.log(result.recordset[0].cMemberRankCode)
            // Set the token as an HTTP-only cookie in the response
            //res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600`);
            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
            
            //return result.recordset[0].cMemberRankCode;

            return token;
        } else {
            console.log("Recordset is null");
            
            return { error: "Recordset is null" };
        }
    } catch (error) {
        console.log(error);
        
        
    }
};

const getAllMembers = async () => {
    try{
        const conn = await connection.getConnection();
        const result = await conn.request().query("SELECT  nMemberID, cEPF, cFtyCode, cFiratName, cDesignation   FROM  LIB_Members where cMemberRankCode = 'MEM'")

        
    return result.recordset;


    }catch(error){
        console.log(error)
    }
}




module.exports= {   
    getMember,
    createToken,
    loginHandler,
    getAllMembers
    
}
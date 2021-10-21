type atributFiscal = 'RO'|'---'|string
export type page = 'cui'|'datefirma'|'register'|'verify'|'parole'|'endpage'|'statuspage'
export type dataToChange = 'cui'|'denumire'|'adresa'|'telefon'|'email'|'logat_google'|'reg_com'|'atribut_fiscal'
export interface FormProps{
    Form:{
        isOpen:boolean,
        onClose: () => void
    },
    data:{
        cui:string,
        denumire:string,
        adresa:string,
        telefon:string,
        email:string,
        logat_google:string,
        reg_com:string,
        atribut_fiscal:atributFiscal
    }
}
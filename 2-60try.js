var i = 1;
try{
    i = i * j;      //��O����
} catch(e) {
    console.log(e.message);
} finally {
    console.log('��O�����͊������܂����B');
}
var i = 1;
try{
    i = i * j;      //例外発生
} catch(e) {
    console.log(e.message);
} finally {
    console.log('例外処理は完了しました。');
}
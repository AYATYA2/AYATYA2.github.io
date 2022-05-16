#include <stdio.h>
int main(){
    char str[100];
    int n;
    int start,end;
    //標準入力からある時刻を受け取る
    fgets(str,sizeof(str),stdin);
    sscanf(str,"%d\n",&n);
    //標準入力から範囲を受け取る
    //最初が範囲の開始時刻、スペース1文字を開けて範囲の終了時刻
    fgets(str,sizeof(str),stdin);
    sscanf(str,"%d %d\n",&start,&end);
    if(end<start){
       end+=24;
       n+=24;
    }
    //範囲内ならinside of range
    //範囲外ならout of range
    //を表示する
     if(n>=start&&n<end){
            printf("inside of range\n");
            return 0;
    }else{
            printf("out of range\n");
            return 0;    
    }
}
#include<stdio.h>
#include<time.h>
int main()
{
    time_t biggest = 0x7FFFFFF;
    printf("biggest = %s\n",asctime(gmtime(&biggest)));
    getchar();
    return 0;
}

#include <stdio.h>

int main(int argc, char *argv[])
{

    printf("%d\n", incremente());
    printf("%d\n", incremente());
    printf("%d\n", incremente());
    printf("%d\n", incremente());

    return 0;
}

int incremente()
{
    static int i = 0;
    return i++;
}
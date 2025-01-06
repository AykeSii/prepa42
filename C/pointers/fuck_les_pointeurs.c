#include <stdio.h>
#include <stdlib.h>

void test(int *myNumbers, int size);

int main()
{
    int myNumbers[] = {1, 2, 3, 4};
    int size = sizeof(myNumbers) / sizeof(myNumbers[0]);

    test(myNumbers, size);
    return 0;
}

void test(int *myNumbers, int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("%d\n", myNumbers[i]);
    }
}
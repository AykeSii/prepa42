#include <stdio.h>
#include <stdlib.h>

int main (int argc, const char * argv[])

{
        int a = 0, b = 0, resultat = 0;

        printf("Veuillez rentrer un premier nombre :\n");
        scanf("%d", &a);

        printf("Veuillez rentrer un second nombre :\n");
        scanf("%d", &b);

        resultat = a + b;

        printf("%d + %d = %d", a, b, resultat);

        return 0;
}

#include <stdio.h>
#include "pointer.h"

int main() {
    int heures = 0, minutes = 90;

    decoupeMinutes(&heures, &minutes);

    printf("%d heures et %d minutes\n", heures, minutes);

    return 0;
}
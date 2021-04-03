#include <stdio.h>

void soma(int* num, int a, int b) {
    *num = a + b;
    printf("A soma dos numeros eh %d", (*num));
}

int main() {
    int a = 5;
    int b = 7;
    int num = 0;

    soma(&num, a, b);
}
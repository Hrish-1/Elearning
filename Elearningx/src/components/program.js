export const program = `#include <iostream>
using namespace std;

//complete the given function
int findMax(int* arr,int n){
        int max = 0;
        for(int i = 0; i < n; i++){
            if(arr[i] > max)
                max = arr[i];
        }
        return max;
}

int main() {
    int t;
    cin >> t;
    while(t--){
        int n;
        cin >> n;
        int arr[n];
        for(int i = 0; i < n; i++){
            cin >> arr[i];
        }
        int size = sizeof(arr)/sizeof(arr[0]);
        int max = findMax(arr,n);
        cout << max << " ";
    }
}`;
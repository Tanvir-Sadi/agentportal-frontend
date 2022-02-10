import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'timeAgo',
    pure: true
})
export class TimeAgoPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            let intervals = [31536000,2592000,604800,86400,3600,60,1]
            let str = ['year','month','week','day','hour','minute','second']
            let counter;
            for (let i=0; i<=intervals.length; i++) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0){
                  if (counter === 1) {
                      return counter + ' ' + str[i] + ' ago'; // singular (1 day ago)
                  } else {
                      return counter + ' ' + str[i] + 's ago'; // plural (2 days ago)
                  }
                }
            }
        }
        return value;
    }

}
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Message {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    id: number;
}

@Injectable({ providedIn: 'root' })
export class MessageService {
    private messagesSubject = new BehaviorSubject<Message[]>([]);
    messages$ = this.messagesSubject.asObservable();

    private confirmSubject = new Subject<{ message: string, resolve: (result: boolean) => void }>();
    confirmRequest$ = this.confirmSubject.asObservable();

    private nextId = 0;

    show(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
        const newMessage: Message = { id: this.nextId++, message, type };
        const current = this.messagesSubject.getValue();
        this.messagesSubject.next([...current, newMessage]);
        setTimeout(() => this.dismiss(newMessage.id), 3000);
    }

    dismiss(id: number) {
        const current = this.messagesSubject.getValue();
        this.messagesSubject.next(current.filter(n => n.id !== id));
    }

    success(message: string) { this.show(message, 'success'); }
    error(message: string) { this.show(message, 'error'); }
    warning(message: string) { this.show(message, 'warning'); }
    info(message: string) { this.show(message, 'info'); }

    confirm(message: string): Promise<boolean> {
        return new Promise(resolve => {
            this.confirmSubject.next({ message, resolve });
        });
    }
}

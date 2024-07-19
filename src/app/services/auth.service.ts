import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private userType: 'manager' | 'candidate' | null = null;
  currentUser: any;
  users = [
    { name: 'admin', password: 'admin', title: 'Admin' },
    { name: 'agent', password: 'agent', title: 'Agent' },
  ];

  login(username: string, password: string): boolean {
    // Replace this with actual authentication logic
    const value: any = localStorage.getItem('candidates');
    const candidate = JSON.parse(value) ?? [];
    const user = [...this.users, ...candidate].find((x) => x.name === username);
    if (user) {
      this.isLoggedIn = true;
      this.currentUser = user;
      this.addCurrentUser(user);
      return true;
    }
    return false;
  }

  addCurrentUser(user: any) {
    const value = localStorage.getItem('user');
    if (value) {
      this.currentUser = JSON.parse(value);
    }

    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(this.currentUser));
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUser() {
    const value: any = localStorage.getItem('user');
    return JSON.parse(value) ?? null;
  }
}

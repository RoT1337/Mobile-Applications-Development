import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  @ViewChild('input', { static: false }) inputElement!: IonInput;

  currentInput: string = '';
  previousInput: string = '';
  operator: string = '';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    if (!isNaN(Number(key))) {
      this.onNumberClick(key);
    } else if (key === '+') {
      this.onArithmeticClick(' + ');
    } else if (key === '-') {
      this.onArithmeticClick(' - ');
    } else if (key === '*') {
      this.onArithmeticClick(' * ');
    } else if (key === '/') {
      this.onArithmeticClick(' / ');
    } else if (key === 'Enter' || key === '=') {
      this.onEqualsClick();
    } else if (key === 'Escape') {
      this.clearInput();
    } else if (key === '.') {
      this.onDecimalClick();
    } else if (key === '%') {
      this.onPercentageClick();
    } else if (key === 'p') {
      this.onPlusMinusClick();
    }
  }

  onNumberClick(number: string) {
    this.currentInput += number;
    this.updateInputElement();
  }

  onArithmeticClick(symbol: string) {
    if (this.currentInput === '') return;

    if (this.previousInput !== '') {
      this.calculateResult();
    }

    this.operator = symbol.trim();
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  clearInput() {
    this.currentInput = '';
    this.previousInput = '';
    this.operator = '';
    this.updateInputElement();
  }

  calculateResult() {
    let result: number;
    const prev = parseFloat(this.previousInput);
    const current = parseFloat(this.currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    this.currentInput = result.toString();
    this.operator = '';
    this.previousInput = '';
    this.updateInputElement();
  }

  onDecimalClick() {
    if (!this.currentInput.includes('.')) {
      this.currentInput += '.';
      this.updateInputElement();
    }
  }

  onEqualsClick() {
    this.calculateResult();
  }

  onPercentageClick() {
    if (this.currentInput !== '') {
      this.currentInput = (parseFloat(this.currentInput) / 100).toString();
      this.updateInputElement();
    }
  }

  onPlusMinusClick() {
    if (this.currentInput !== '') {
      this.currentInput = (parseFloat(this.currentInput) * -1).toString();
      this.updateInputElement();
    }
  }

  updateInputElement() {
    this.inputElement.value = this.currentInput;
  }
}
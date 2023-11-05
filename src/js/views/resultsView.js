import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again !';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join();
  }
}

// preview__link--active
// <div class="preview__user-generated">
//               <svg>
//                 <use href="${icons}#icon-user"></use>
//               </svg>
//             </div>

export default new ResultsView();

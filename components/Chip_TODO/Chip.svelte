<script>
import mdc, { classes } from '../..';

//https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips
</script>

<div class="mdc-chip-set mdc-chip-set--filter" role="grid" use:mdc>

  <div class="mdc-chip" role="row">
    <div class="mdc-chip__ripple"></div>
    <span role="gridcell">
      <span role="button" tabindex="0" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">Chip One</span>
      </span>
    </span>
  </div>
  <div class="mdc-chip" role="row">
    <div class="mdc-chip__ripple"></div>
    <span role="gridcell">
      <span role="button" tabindex="-1" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">Chip Two</span>
      </span>
    </span>
  </div>

  <div class="mdc-chip" role="row">
    <div class="mdc-chip__ripple"></div>
    <i class="material-icons mdc-chip__icon mdc-chip__icon--leading">event</i>
    <span role="gridcell">
      <span role="button" tabindex="0" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">Add to calendar</span>
      </span>
    </span>
  </div>

  <div class="mdc-chip" role="row">
    <div class="mdc-chip__ripple"></div>
    <span role="gridcell">
      <span role="button" tabindex="0" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">Jane Smith</span>
      </span>
    </span>
    <span role="gridcell">
      <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing" tabindex="-1" role="button">cancel</i>
    </span>
  </div>

  <div class="mdc-chip" role="row">
    <div class="mdc-chip__ripple"></div>
    <span class="mdc-chip__checkmark" >
      <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
        <path class="mdc-chip__checkmark-path" fill="none" stroke="black"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
    </span>
    <span role="gridcell">
      <span role="checkbox" tabindex="0" aria-checked="false" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">Filterable content</span>
      </span>
    </span>
  </div>


  <div class="mdc-chip" role="row">
    <div class="mdc-chip__ripple"></div>
    <i class="material-icons mdc-chip__icon mdc-chip__icon--leading">face</i>
    <span class="mdc-chip__checkmark" >
      <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
        <path class="mdc-chip__checkmark-path" fill="none" stroke="black"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
    </span>
    <span role="gridcell">
      <span role="checkbox" tabindex="0" aria-checked="false" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">Filterable content</span>
      </span>
    </span>
  </div>

  <div class="mdc-chip mdc-chip--selected" role="row">
    <div class="mdc-chip__ripple"></div>
    <span role="gridcell">
      <span role="radio" tabindex="0" aria-checked="true" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">Add to calendar</span>
      </span>
    </span>
  </div>

  <div class="mdc-chip mdc-chip--selected" role="row">
    <div class="mdc-chip__ripple"></div>
    <i class="material-icons mdc-chip__icon mdc-chip__icon--leading mdc-chip__icon--leading-hidden">face</i>
    <span class="mdc-chip__checkmark">
      <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
        <path class="mdc-chip__checkmark-path" fill="none" stroke="black"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
    </span>
    <span role="gridcell">
      <span role="checkbox" tabindex="0" aria-checked="true" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">Filterable content</span>
      </span>
    </span>
  </div>

</div>

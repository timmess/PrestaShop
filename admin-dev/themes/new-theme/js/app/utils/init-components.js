/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

import TranslatableField from '@js/components/translatable-field.js';
import TranslatableInput from '@js/components/translatable-input.js';
import TinyMCEEditor from '@js/components/tinymce-editor.js';
import TaggableField from '@js/components/taggable-field.js';

const initComponents = () => {
  let translatableInput = null;
  let tinyMCEEditor = null;
  let translatableField = null;
  let taggableField = null;

  if (typeof window.prestashop === 'undefined') {
    window.prestashop = {};
  }
  // Initialize the prestashop global object
  window.prestashop.components = {
    translatableInput: {
      init() {
        if (translatableInput === null) {
          translatableInput = new TranslatableInput();
        }
        return translatableInput;
      },
      component(options) {
        return new TranslatableInput(options);
      },
    },
    tinyMCEEditor: {
      init() {
        if (tinyMCEEditor === null) {
          tinyMCEEditor = new TinyMCEEditor();
        }
        return tinyMCEEditor;
      },
      component(options) {
        return new TinyMCEEditor(options);
      },

    },
    translatableField: {
      init() {
        if (translatableField === null) {
          translatableField = new TranslatableField();
        }
        return translatableField;
      },
      component(options) {
        return new TranslatableField(options);
      },
    },
    taggableField: {
      init() {
        if (taggableField === null) {
          taggableField = new TaggableField();
        }
        return taggableField;
      },
      component(options) {
        return new TaggableField(options);
      },
    },
  };
};
export default initComponents;
